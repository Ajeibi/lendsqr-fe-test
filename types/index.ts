export interface User {
    id: number;
    orgName: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
    personalInfo: {
        fullName: string;
        phoneNumber: string;
        emailAddress: string;
        bvn: string;
        gender: string;
        maritalStatus: string;
        children: number;
        typeOfResidence: string;
        userId: string;
        bankName: string;
        bankAccount: string;
    };
    educationAndEmployment: {
        levelOfEducation: string;
        employmentStatus: string;
        sectorOfEmployment: string;
        durationOfEmployment: string;
        officeEmail: string;
        monthlyIncome: string;
        loanRepayment: string;
    };
    socials: {
        twitter: string;
        facebook: string;
        instagram: string;
    };
    guarantors: Array<{
        fullName: string;
        phoneNumber: string;
        email: string;
        relationship: string;
    }>;
    ratings: 1 | 2 | 3;
}
