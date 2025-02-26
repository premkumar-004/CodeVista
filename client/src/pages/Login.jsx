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
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

const Login = () => {
    const [loginInput, setLoginInput] = useState({
        email: "",
        password: "",
    });
    const [singupInput, setSignupInput] = useState({
        name: "",
        email: "",
        password: "",
    });

    const changeInputHandler = (e, type) => {
        const { name, value } = e.target;
        if (type === "signup") {
            setSignupInput({
                ...singupInput,
                [name]: value,
            });
        } else {
            setLoginInput({
                ...loginInput,
                [name]: value,
            });
        }
    }

    const handleRegistration = (type) => {
        const inputData = type === "signup" ? singupInput : loginInput;
        console.log(inputData);

    }

    return (
        <div className="flex justify-center items-center w-full">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Signup</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Signup</CardTitle>
                            <CardDescription>
                                Create a new account and click signup when you are done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input name="name" value={singupInput.name} onChange={(e) => changeInputHandler(e, "signup")} type="text" placeholder="eg. Prem Kumar" required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Email</Label>
                                <Input name="email" value={singupInput.email} onChange={(e) => changeInputHandler(e, "signup")} type="email" placeholder="eg. prem@gmail.com" required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Password</Label>
                                <Input name="password" value={singupInput.password} onChange={(e) => changeInputHandler(e, "signup")} type="password" placeholder="password" required="true" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => handleRegistration("signup")}>Signup</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Login using your username and password. If you don't have an account, you can create one by clicking the signup tab.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Email</Label>
                                <Input name="email" value={loginInput.email} onChange={(e) => changeInputHandler(e, "login")} placeholder="eg. prem@gmail.com" type="email" required="true" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">Password</Label>
                                <Input name="password" value={loginInput.password} onChange={(e) => changeInputHandler(e, "login")} placeholder="password" type="password" required="true" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => handleRegistration("login")}>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Login;