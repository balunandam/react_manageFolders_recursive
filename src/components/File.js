import { useState } from "react";
import {
  IconPencil,
  IconCheck,
  IconX,
  IconFolderPlus,
  IconFilePlus
} from "@tabler/icons-react";
export default function File({ data }) {
  const [flag, setFlag] = useState(false);
  let [editEnable, editDisable] = useState(true);
  const [addNew, setAddNew] = useState(false);
  const [addNewName, setAddNewName] = useState('');
  let [newName, setNewName] = useState(data.name);
  const [addType, setAddType] = useState();
  const handleChange = (event) => {
    setNewName(event.target.value);
  };
  const addNewFolder = (type) => {
    setAddNew(!addNew);
    setAddType(type);
  }
  const handleSetNewName = (event) => {
    setAddNewName(event.target.value);
  }
  if (data.type) {
    return (
      <div>
        <div>
          {editEnable ? (
            <div>
              <span
                onClick={() => {
                  setFlag(!flag);
                }}
              >
                {newName}
              </span>
              <IconPencil
                color="black"
                size={12}
                style={{
                  postion: "absolute",
                  marginLeft: "2px",
                }}
                onClick={() => editDisable(!editEnable)}
              />
              <IconFolderPlus
                size={12}
                style={{
                  postion: "absolute",
                  marginLeft: "2px",
                }}
                onClick={() => {addNewFolder('folder'); setFlag(true)}}
              />
               <IconFilePlus
                size={12}
                style={{
                  postion: "absolute",
                  marginLeft: "2px",
                }}
                onClick={() => addNewFolder('file')}
              />
              </div>
          ) : (
            <div>
              <input
                type="text"
                id="message"
                value={newName}
                onChange={handleChange}
              />
              <IconCheck
                size={12}
                style={{
                  marginTop: "7px",
                  postion: "absolute",
                  marginLeft: "2px",
                }}
                onClick={() => {
                  editDisable(true);
                }}
              />
              <IconX
                size={12}
                style={{
                  marginTop: "7px",
                  postion: "absolute",
                  marginLeft: "2px",
                }}
                onClick={() => {
                    editDisable(true);
                  }}
              />
            </div>
          )}
        </div>
        <div style={{ display: flag ? "block" : "none", paddingLeft: "15px" }}>
            <input type="text" value={addNewName} onChange={handleSetNewName}/>
            <IconCheck
                size={12}
                style={{
                  marginTop: "7px",
                  postion: "absolute",
                  marginLeft: "2px",
                }}
                onClick={() => {
                  data.items.push({name: addNewName, type: addType});
                  console.log(data.items);
                }}
              />
                <IconX
                size={12}
                style={{
                  marginTop: "7px",
                  postion: "absolute",
                  marginLeft: "2px",
                }}
                // onClick={() => {

                // }}
              />
          {data.items.map((res) => {
            return <File data={res} />;
          })}
        </div>
      </div>
    );
  } else {
    <div>
      <span>{newName}</span>
    </div>;
  }
}
