import React, { useState } from 'react';
import './App.css';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

function App() {
  const [checkList, setCheckList] = useState([true, true, true, true, true, true, true, true, true]);
  const [flag, setFlag] = useState("rwxrwxrwx");
  const [octal, setOctal] = useState("777");

  const generatePermissions = (input:boolean[]) => {
    const permissions = input.map((value, index) => {
        if (value) {
            return index % 3 === 0 ? 'r' : index % 3 === 1 ? 'w' : 'x';
        } else {
            return '-';
        }
    }).join('');

    const octalPermissions = parseInt(permissions.replace(/-/g, '0').replace(/[rwx]/g, '1'), 2).toString(8);

    return [permissions, octalPermissions];
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setCheckList((previous)=>{
      let checkListUpdate = Array.from(previous);
      checkListUpdate[index] = event.target.checked;
      const [perm, octPerm] = generatePermissions(checkListUpdate);
      setFlag(perm);
      setOctal(octPerm);
      return checkListUpdate;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        CHMOD Simulator
      </header>
      <h4>
      {'chmod <options(-R/-v/-c/-f/-h)> <user_type(u/g/o/a)><add/revoke(+/-)><permission_type(r/w/x)> <file_or_directory name>'}
      </h4>
      <div id="permissionGrid">
        <div className="action"></div>
        <div className="action">Read</div>
        <div className="action">Write</div>
        <div className="action">Execute</div>

        <div className="group">User</div>
        <div className="checkbox">
          <Checkbox 
            checked={checkList[0]}
            onChange={(e)=>handleChange(e, 0)}
          />
        </div>
        <div className="checkbox">
          <Checkbox 
            checked={checkList[1]}
            onChange={(e)=>handleChange(e, 1)}
          />
        </div>
        <div className="checkbox">
          <Checkbox 
            checked={checkList[2]}
            onChange={(e)=>handleChange(e, 2)}
          />
        </div>

        <div className="group">Group</div>
        <div className="checkbox">
          <Checkbox 
            checked={checkList[3]}
            onChange={(e)=>handleChange(e, 3)}
          />
        </div>
        <div className="checkbox">
          <Checkbox 
            checked={checkList[4]}
            onChange={(e)=>handleChange(e, 4)}
          />
        </div>
        <div className="checkbox">
          <Checkbox 
            checked={checkList[5]}
            onChange={(e)=>handleChange(e, 5)}
          />
        </div>

        <div className="group">Others</div>
        <div className="checkbox">
          <Checkbox 
            checked={checkList[6]}
            onChange={(e)=>handleChange(e, 6)}
          />
        </div>
        <div className="checkbox">
          <Checkbox 
            checked={checkList[7]}
            onChange={(e)=>handleChange(e, 7)}
          />
        </div>
        <div className="checkbox">
          <Checkbox 
            checked={checkList[8]}
            onChange={(e)=>handleChange(e, 8)}
          />
        </div>
      </div>
      <div className="output">
        <TextField 
          label="Flags"
          value={flag}
          margin="normal"
          size="small"
        />
      </div>
      <div className="output">
        <TextField 
          label="Octal"
          value={octal}
          margin="normal"
          size="small"
        />
      </div>
    </div>
  );
}

export default App;
