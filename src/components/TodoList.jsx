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
        <div className="w-full min-h-screen py-10 px-12 bg-gradient-to-br from-gray-100 to-gray-200">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Todo List Application</h1>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex gap-6">
                    {columnOrder.map((colKey) => (
                        <Droppable droppableId={colKey} key={colKey}>
                            {(provided) => (
                                <div
                                    className="w-1/3 h-auto p-5 rounded-xl bg-white shadow-md"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    <div className="text-2xl font-semibold text-gray-700 mb-4">
                                        {columnTitles[colKey]}
                                    </div>
                                    {columns[colKey].map((card, index) => (
                                        <Draggable draggableId={card.id} index={index} key={card.id}>
                                            {(provided) => (
                                                <div
                                                    className={`w-full h-auto mt-4 p-4 rounded-lg shadow-sm transition-all ${card.status === "New"
                                                        ? "bg-blue-100 border-l-4 border-blue-500"
                                                        : card.status === "Ongoing"
                                                            ? "bg-orange-100 border-l-4 border-orange-500"
                                                            : "bg-green-100 border-l-4 border-green-500"
                                                        }`}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    {card.isEditing ? (
                                                        <div>
                                                            <input
                                                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[18px] font-[500] mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                                                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[17px] text-gray-700 mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
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

                                                            <div className="flex gap-3">
                                                                <button
                                                                    onClick={() =>
                                                                        handleSaveCard(colKey, card.id, card.title, card.description)
                                                                    }
                                                                    className="px-5 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition"
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
                                                                    className="px-5 py-2 bg-gray-400 text-white rounded-md cursor-pointer hover:bg-gray-500 transition"
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <div className="text-[22px] font-[600] ">{card.title}</div>
                                                            <div className="text-[17px] text-gray-600 mt-1">
                                                                {card.description}
                                                            </div>
                                                            <div className="flex justify-between items-center mt-4">
                                                                <div className="flex items-center gap-x-2 text-[15px] font-medium text-gray-700">
                                                                    Status:<span className="font-semibold">{card.status}</span>
                                                                </div>
                                                                <div className="flex gap-x-4 items-center text-gray-600">
                                                                    <div className='cursor-pointer hover:text-blue-600'>
                                                                        <FiEdit onClick={() => handleEditCard(colKey, card.id)} />
                                                                    </div>
                                                                    <div className='cursor-pointer hover:text-red-600'>
                                                                        <AiOutlineDelete
                                                                            onClick={() => handleDeleteCard(colKey, card.id)}
                                                                            className='text-lg'
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
                                            className=" w-40  py-1 flex items-center justify-center gap-x-2 text-[20px] font-[600] bg-blue-500 mt-5 text-white cursor-pointer rounded-md hover:bg-blue-600 transition "
                                            onClick={handleAddCard}
                                        >
                                            <FiPlus />
                                            <div>Add a Card</div>
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