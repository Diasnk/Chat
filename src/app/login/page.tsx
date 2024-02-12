"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "react-hot-toast";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile/" + user.username);
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="relative pt-10 flex flex-col justify-center items-center min-h-screen overflow-hidden">
            <div className="w-full m-auto bg-white lg:max-w-lg">
                <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">
                    {loading ? "Processing" : "Login"}
                    </CardTitle>
                    <CardDescription className="text-center">
                    Enter your email and password to log in
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email" 
                        type="email" 
                        placeholder="email"
                        value={user.email} 
                        onChange={(e) => setUser({...user, email: e.target.value})} 
                        />
                    </div>
                    <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                        id="password"
                        type="password"
                        placeholder="password"
                        value={user.password} 
                        onChange={(e) => setUser({...user, password: e.target.value})} 
                        />
                    </div>
                    <span className=" text-blue-600 hover:underline text-sm">
                    Forget password ?
                    </span>
                </CardContent>
                <CardFooter className="flex flex-col">

                    {
                        buttonDisabled 
                        ? 
                            <Button className="w-full bg-slate-400 hover:bg-slate-400"
                            type="submit"
                            
                            >
                                Login
                            </Button>
                        :
                            <Button className="w-full"
                            type="submit"
                            onClick={onLogin}
                            >
                                Login
                            </Button>
                    }
                    
                    <p className="mt-2 text-xs text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <span onClick={() => {
                        console.log()
                    }} className=" text-blue-600 hover:underline"><Link href="./login">Sign In</Link></span>
                    </p>
                </CardFooter>
                </Card>
            </div>
        </div>
    )
}