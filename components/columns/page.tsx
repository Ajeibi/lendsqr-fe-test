import { User, columns } from "./columns";
import { DataTable } from "./data-table";

async function getUsers(): Promise<User[]> {
    const res = await fetch("https://run.mocky.io/v3/fff9b91a-7a7b-4c69-b526-b8c31aac7417", {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

export default async function HomeTable() {
    let data: User[] = [];

    try {
        data = await getUsers();
    } catch (error) {
        console.error("Error fetching user data:", error);
    }

    return (
        <div className="overflow-x-auto">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
