import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Spinner } from "@/components/ui/spinner"
import api from "@/utils/api"
import apiRoutes from "@/utils/apiRoutes"
import handleResponse from "@/utils/handleResponse"
import { useEffect, useState } from "react"

interface NewChatDialogProp {
    open?: boolean,
    setOpen: (s: boolean) => void,
    setSelectedId: (s: string) => void,
    title?: string,
    desc?: string,
}

export function NewChatDialog({ open, setOpen, title, desc, setSelectedId }: NewChatDialogProp

) {
    const [newUser, setNewUser] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchUserList = async () => {
        try {
            setLoading(true)
            const response = await api.get(apiRoutes.chat.newUserList);
            const result = response.data
            setNewUser(result.data)
            console.log(result.data)
        } catch (error) {
            setNewUser([])
            handleResponse(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!open) return
        fetchUserList()
    }, [open])


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">{title}</Button>
            </DialogTrigger>
            <DialogContent
                className="
    min-w-[800px]
    max-w-5xl
    h-[85vh]
    p-0
    overflow-hidden
    flex
    flex-col
  "
            >
                {/* HEADER */}
                <DialogHeader className="px-6 py-5 border-b">
                    <DialogTitle className="text-3xl font-bold">
                        {title}
                    </DialogTitle>

                    <DialogDescription>
                        {desc}
                    </DialogDescription>
                </DialogHeader>

                {/* SEARCH */}
                <div className="px-6 py-4 border-b">
                    <div
                        className="
                flex
                items-center
                gap-2
                bg-gray-100
                px-4
                py-3
                rounded-xl
            "
                    >
                        <input
                            placeholder="Search users..."
                            className="
                    bg-transparent
                    outline-none
                    w-full
                "
                        />
                    </div>
                </div>

                {/* USER LIST */}
                <div className=" overflow-y-auto px-4 py-4">

                    {loading ? <div className="flex-1 w-full flex justify-center items-center min-h-[300px]">
                        <Spinner className="size-10" />
                    </div> : (
                        newUser.length > 0 && newUser.map((data: any) => (
                            <div
                                key={data.id}
                                className="
                    flex
                    items-center
                    gap-4
                    p-4
                    rounded-2xl
                    cursor-pointer
                    transition-all
                    mb-2
                    hover:bg-gray-100
                "
                            >
                                {/* AVATAR */}
                                <img
                                    src="https://i.pravatar.cc/150?img=32"
                                    className="
                        w-14
                        h-14
                        rounded-full
                        object-cover
                    "
                                />

                                {/* CONTENT */}
                                <div className="flex-1">

                                    <div
                                        className="
                            flex
                            justify-between
                            items-center
                        "
                                    >
                                        <h3
                                            className="
                                font-semibold
                                text-lg
                            "
                                        >
                                            {`${data?.first_name} ${data?.last_name}`}
                                        </h3>

                                        <span
                                            className="
                                text-xs
                                text-gray-500
                            "
                                        >
                                            Online
                                        </span>
                                    </div>

                                    <p
                                        className="
                            text-gray-500
                            truncate
                        "
                                    >
                                        Frontend Developer
                                    </p>
                                </div>

                                {/* ACTION */}
                                <Button
                                    className="
                        rounded-xl cursor-pointer
                    "
                                    onClick={() => {
                                        setSelectedId(data?.id)
                                        setOpen(false)
                                    }}
                                >
                                    Chat
                                </Button>
                            </div>
                        ))
                    )}

                </div>
            </DialogContent>
        </Dialog>
    )
}
