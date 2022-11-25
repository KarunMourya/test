import style from "./History.module.css";
import Card from "../../pages/Card/Card";
import Indiviual from "./Indiviual";
import FilterListIcon from '@mui/icons-material/FilterList';
import React from 'react';
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};
export default function History() {
  const data = [
    {
      id: 1,
      name: "Karun Mourya",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png",
      address: "79/3 atsy gdtuj jhfj juhvj",
      date: "12-07-2022 20:39:22",
    },
    {
      id: 2,
      name: "Sunaya Mourya",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png",
      address: "79/3 atsy gdtuj jhfj juhvj",
      date: "12-09-2022 20:39:23",
    },
    {
      id: 3,
      name: "Amit Sharma",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png",
      address: "79/3 atsy gdtuj jhfj juhvj",
      date: "12-07-2022 20:39:11",
    },
    {
      id: 4,
      name: "Priya Sharma",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png",
      address: "79/3 atsy gdtuj jhfj juhvj",
      date: "12-09-2022 20:38:23",
    },    {
        id: 5,
        name: "Karun Mourya 2",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png",
        address: "79/3 atsy gdtuj jhfj juhvj",
        datae: "12-07-2022 20:37:23",
      },
      {
        id: 6,
        name: "Sunaya Mourya 1",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png",
        address: "79/3 atsy gdtuj jhfj juhvj",
        date: "12-09-2022 20:37:23",
      },
      {
        id: 7,
        name: "Amit Sharma 1",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png",
        address: "79/3 atsy gdtuj jhfj juhvj",
        date: "12-07-2022 20:38:00",
      },
      {
        id: 8,
        name: "Priya Sharma 1",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png",
        address: "79/3 atsy gdtuj jhfj juhvj",
        date: "12-09-2022 20:37:23",
      },    {
        id: 9,
        name: "Karun Mourya 1" ,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png",
        address: "79/3 atsy gdtuj jhfj juhvj",
        date: "12-07-2022 20:68:23",
      }
  ];
  const user = "user";
  const { items, requestSort, sortConfig } = useSortableData(data);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <div className={style.historyContainer}>
      {user === "ngo" && (
        <div className={style.Container}>
          <div className={style.ngotitleContainer}>
            <h3>Recently added</h3>
            <button
              type="button"
              onClick={() => requestSort('date')}
              className={getClassNamesFor('date')}
            >
              <FilterListIcon/>
            </button>
          </div>
          <div className={style.zone}>
          <div className={style.scrolls}>
            {items.map((item, index) => (
              <div key={index}>
                <Indiviual
                  title={item.image}
                  name={item.name}
                  address={item.address}
                  time={item.date}
                />
              </div>
      ))}
            </div>

          </div>
        </div>
      )}
      {user === "user" && (
        <div className={style.Container}>
          <div className={style.titleContainer}>
            <h3>History</h3>
          </div>
          <div className={style.card}>
          <div className={style.scroll}>
          <Card  title="12-02-2022" name="NGO befdnhbstrntn" type ="save" />
            <Card  title="12-02-2022" name="NGO befdnhbstrntn" type ="save" />
            <Card  title="12-02-2022" name="NGO befdnhbstrntn" type ="save" />
            <Card  title="12-02-2022" name="NGO befdnhbstrntn" type ="save" />
            <Card  title="12-02-2022" name="NGO befdnhbstrntn" type ="save" />
            <Card  title="12-02-2022" name="NGO befdnhbstrntn" type ="save" />
          </div>

          </div>
        </div>
      )}
    </div>
  );
}

