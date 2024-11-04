import React from 'react';
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';
import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import './styles.scss';

const formSchema = authFormSchema('sign-up');

interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">
                        {label}
                    </FormLabel>
                    <div className="form-control">
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                className="input-class"
                                type={name === 'password' ? 'password' : 'text'}
                                value={field.value || ''}
                                onChange={field.onChange}
                            />
                        </FormControl>
                        <FormMessage className="form-message margin" />
                    </div>
                </div>
            )}
        />
    );
}

export default CustomInput;