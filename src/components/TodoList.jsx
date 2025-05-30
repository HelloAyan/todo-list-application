import { React, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { GoHash } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = () => {
    const [columns, setColumns] = useState({
        new: [
            {
                id: "1",
                title: "Admin Panel Test Case",
                description: "Build and test the admin dashboard interface.",
                attachments: 2,
                status: "New",
                isEditing: false,
            },
        ],
        ongoing: [],
        done: [],
    });

    const handleAddCard = () => {
        const newCard = {
            id: Date.now().toString(),
            title: "",
            description: "",
            attachments: 0,
            status: "New",
            isEditing: true,
        };
        setColumns((prev) => ({
            ...prev,
            new: [...prev.new, newCard],
        }));
    };

    const handleSaveCard = (col, id, updatedTitle, updatedDescription) => {
        setColumns((prev) => ({
            ...prev,
            [col]: prev[col].map((card) =>
                card.id === id
                    ? { ...card, title: updatedTitle, description: updatedDescription, isEditing: false }
                    : card
            ),
        }));
        toast.success("Card updated successfully!");
    };

    const handleEditCard = (col, id) => {
        setColumns((prev) => ({
            ...prev,
            [col]: prev[col].map((card) =>
                card.id === id ? { ...card, isEditing: true } : card
            ),
        }));
    };

    const handleDeleteCard = (col, id) => {
        setColumns((prev) => ({
            ...prev,
            [col]: prev[col].filter((card) => card.id !== id),
        }));
        toast.error("Card deleted.");
    };

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        const sourceCol = source.droppableId;
        const destCol = destination.droppableId;

        const sourceCards = [...columns[sourceCol]];
        const [removed] = sourceCards.splice(source.index, 1);

        // Update the status label
        const updatedCard = { ...removed, status: columnTitles[destCol] };

        const destCards = [...columns[destCol]];
        destCards.splice(destination.index, 0, updatedCard);

        setColumns({
            ...columns,
            [sourceCol]: sourceCards,
            [destCol]: destCards,
        });
        toast.success(`Task moved to "${columnTitles[destCol]}"`);
    };

    const columnOrder = ["new", "ongoing", "done"];
    const columnTitles = { new: "New", ongoing: "Ongoing", done: "Done" };


    return (
        <div className="w-full min-h-screen py-7 px-10 bg-gray-100">
            <h1 className="text-3xl font-bold py-10">Todo List Application</h1>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex gap-5">
                    {columnOrder.map((colKey) => (
                        <Droppable droppableId={colKey} key={colKey}>
                            {(provided) => (
                                <div
                                    className="w-1/3 h-auto p-4 rounded-sm bg-gray-300"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    <div className="text-xl font-semibold mb-2">
                                        {columnTitles[colKey]}
                                    </div>
                                    {columns[colKey].map((card, index) => (
                                        <Draggable draggableId={card.id} index={index} key={card.id}>
                                            {(provided) => (
                                                <div
                                                    className={`w-full h-auto mt-4 p-3 rounded-sm ${card.status === "New"
                                                        ? "bg-blue-300"
                                                        : card.status === "Ongoing"
                                                            ? "bg-orange-300"
                                                            : "bg-green-300"
                                                        }`}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    {card.isEditing ? (
                                                        <div>
                                                            <input
                                                                className="w-full border border-gray-400 rounded px-2 py-1 text-[18px] font-semibold mb-2"
                                                                placeholder="Enter title"
                                                                value={card.title}
                                                                onChange={(e) => {
                                                                    const updatedTitle = e.target.value;
                                                                    setColumns((prev) => ({
                                                                        ...prev,
                                                                        [colKey]: prev[colKey].map((c) =>
                                                                            c.id === card.id ? { ...c, title: updatedTitle } : c
                                                                        ),
                                                                    }));
                                                                }}
                                                            />
                                                            <textarea
                                                                className="w-full border border-gray-400 rounded px-2 py-1 text-sm text-gray-700 mb-2"
                                                                placeholder="Enter description"
                                                                value={card.description}
                                                                onChange={(e) => {
                                                                    const updatedDescription = e.target.value;
                                                                    setColumns((prev) => ({
                                                                        ...prev,
                                                                        [colKey]: prev[colKey].map((c) =>
                                                                            c.id === card.id ? { ...c, description: updatedDescription } : c
                                                                        ),
                                                                    }));
                                                                }}
                                                            />

                                                            <div className="flex gap-2">
                                                                <button
                                                                    onClick={() =>
                                                                        handleSaveCard(colKey, card.id, card.title, card.description)
                                                                    }
                                                                    className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                                >
                                                                    Save
                                                                </button>

                                                                <button
                                                                    onClick={() => {
                                                                        setColumns((prev) => ({
                                                                            ...prev,
                                                                            [colKey]: prev[colKey].map((c) =>
                                                                                c.id === card.id ? { ...c, isEditing: false } : c
                                                                            ),
                                                                        }));
                                                                    }}
                                                                    className="px-4 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <div className="text-[20px] font-[600]">{card.title}</div>
                                                            <div className="text-[16px] text-gray-600 mt-1">
                                                                {card.description}
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <div className="flex items-center gap-x-10 mt-2">

                                                                    <div className="flex items-center gap-x-2 font-[600]">
                                                                        Status:
                                                                        <span className="text-sm ">{card.status}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flex gap-x-5 items-center mt-2">
                                                                    <div className='p-1 cursor-pointer'>
                                                                        <FiEdit
                                                                            onClick={() => handleEditCard(colKey, card.id)}

                                                                        />
                                                                    </div>
                                                                    <div className='p-1 cursor-pointer'>
                                                                        <AiOutlineDelete
                                                                            onClick={() => handleDeleteCard(colKey, card.id)}
                                                                            className='text-[18px]'

                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                    {colKey === "new" && (
                                        <div
                                            className="w-full h-auto flex items-center gap-x-3 mt-5 cursor-pointer text-[18px]"
                                            onClick={handleAddCard}
                                        >
                                            <FiPlus /> Add a card
                                        </div>
                                    )}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>

            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    )
}

export default TodoList;