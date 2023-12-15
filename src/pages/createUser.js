import { useEffect } from "react";
import { useRouter } from "next/router";
import CreateUserForm from "@/app/components/CreateUserForm";

export default function CreateUser({createUser, isLoggedIn }) {
    const router = useRouter();
    useEffect(() => {
        if (isLoggedIn) router.push("/");
    }, [isLoggedIn])

    return(
        <main>
            <CreateUserForm createUser={createUser}/>
        </main>
    );
}