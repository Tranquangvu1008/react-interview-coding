import Collapse from "antd/es/collapse/Collapse";
import { useState } from "react";

interface CollapseItem {
    key: string;
    label: string;
    children: React.ReactNode;
}


export const Accordion = () => {
    const [items, setItems] = useState<CollapseItem[]>([]);

    const [newLabel, setNewLabel] = useState('');
    const [newChildren, setNewChildren] = useState('');

    const handleAddItem = () => {
        if (newLabel && newChildren) {
            const newItem = {
                key: String(items.length + 1),
                label: newLabel,
                children: <p className="break-words">{newChildren}</p>,
            };
            setItems([...items, newItem]);
            setNewLabel('');
            setNewChildren('');
        }
    };

    return (
        <div className="p-10">
            {items && items.length > 0 && <Collapse items={items} />}
            <div className="py-10 flex flex-col gap-2">
                <input
                    className="border-solid border-[1px] rounded-lg p-2"
                    type="text"
                    placeholder="Enter panel label"
                    value={newLabel}
                    onChange={(e) => setNewLabel(e.target.value)}
                />
                <textarea
                    className="border-solid border-[1px] rounded-lg p-2"
                    placeholder="Enter panel content"
                    value={newChildren}
                    onChange={(e) => setNewChildren(e.target.value)}
                    rows={5}
                />
                <button onClick={handleAddItem} className="p-2 bg-blue-500 text-white rounded-lg">Add Panel</button>
            </div>
        </div>
    )
}
