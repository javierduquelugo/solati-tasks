import {useState,useEffect} from 'react';
import axios from 'axios';

import {
    Button,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Chip,
    Tooltip,
    useDisclosure,
} from "@nextui-org/react";

export const columns = [
{name: "TITULO", uid: "name"},
{name: "DESCRIPCIÓN", uid: "role"},
{name: "ESTADO", uid: "status"},
{name: "ACTIONS", uid: "actions"},
];

type typeTask = {
id: number;
titulo: string;
descripcion: string;
estado: string;
}

export const DeleteIcon = (props:any) => {
return (
    <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
    >
    <path
        d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
    />
    <path
        d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
    />
    <path
        d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
    />
    <path
        d="M8.60834 13.75H11.3833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
    />
    <path
        d="M7.91669 10.4167H12.0834"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
    />
    </svg>
);
};

export const EditIcon = (props:any) => {
return (
    <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
    >
    <path
        d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
    />
    <path
        d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
    />
    <path
        d="M2.5 18.3333H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
    />
    </svg>
);
};


const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    useEffect(() =>{
        getAllTasks();
    }, []);

    const endpoint = 'http://localhost:8000/api';

    const getAllTasks = async () => {
        const response = await axios.get(`${endpoint}/tasks`);
        if(response.data.data){
            setTasks(response.data.data);
        }
    }

    const handleClickDelete = async (id:number) => {
        const response = await axios.delete(`${endpoint}/tasks/${id}`);
        console.log(response.data);
        getAllTasks();
    }

    return (
        <div>
            <div className="mx-auto">
                <Table aria-label="Tabla" className="ml-5">
                <TableHeader columns={columns}>
                    {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                        {column.name}
                    </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={tasks}>
                    {(item:typeTask) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.titulo}</TableCell>
                        <TableCell>{item.descripcion}</TableCell>
                        <TableCell>
                            <Chip className="capitalize" color={item.estado == 'completada' ? "success" : "warning"} size="sm" variant="flat">
                                {item.estado}
                            </Chip>
                        </TableCell>
                        <TableCell>
                            <div className="relative flex items-center gap-2">
                                <Tooltip content="Editar Tarea">
                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                    <EditIcon onClick={onOpen}/>
                                </span>
                                </Tooltip>
                                <Tooltip color="danger" content="Eliminar Tarea">
                                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                    <DeleteIcon onClick={handleClickDelete(item.id)}/>
                                </span>
                                </Tooltip>
                            </div>
                        </TableCell>
                    </TableRow>
                    )}
                </TableBody>
                </Table>
            </div>
            <div className="flex justify-center mt-10">
                <div className="">
                    <Button color="success" >AGREGAR TAREA</Button>
                </div>
            </div>
        </div>
    )  
}

export default Tasks