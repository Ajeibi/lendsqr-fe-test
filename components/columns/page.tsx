import { User, columns } from "./columns";
import { DataTable } from "./data-table";

async function getUsers(): Promise<User[]> {
    const res = await fetch("https://run.mocky.io/v3/2c6df1a4-8bbd-4b44-9102-ea1574d175fe");
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

export default async function HomeTable() {
    const data = await getUsers();

    return (
        <div className="overflow-x-auto">
            <DataTable columns={columns} data={data} />
        </div>
    );
}

