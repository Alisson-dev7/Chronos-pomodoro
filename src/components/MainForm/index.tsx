import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { Input } from "../Input";

export function MainForm() {
  return (
    <form className='form'>
      <div className='formRow'>
        <Input
          id='input'
          type='text'
          labelText='task'
          placeholder='Digite Algo'
        ></Input>
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
