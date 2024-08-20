import React, { type FC } from "react";

import styles from "./RuntimeSelector.module.css";
import { useBenchmarkContext } from "@components/LandingPage/Benchmark/context/useBenchmarkContext.tsx";

interface Item {
  value: "node-22" | "node-18" | "bun";
  name: string;
}

const RuntimeSelector: FC = () => {
  const { selectedItems, setSelectedItems } = useBenchmarkContext();

  const items: Item[] = [
    { value: "bun", name: "Bun" },
    { value: "node-22", name: "Node 22" },
    { value: "node-18", name: "Node 18" },
  ];

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedItems({
      ...selectedItems,
      runtime: e.target.value as "node-22" | "node-18" | "bun",
    });
  };

  return (
    <select className={styles.button} onChange={handleChange}>
      {items.map((item) => (
        <option
          key={item.value}
          value={item.value}
          selected={selectedItems.runtime === item.value}
        >
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default RuntimeSelector;