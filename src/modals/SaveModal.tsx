import React, { useRef, useState, useEffect } from "react";

interface SaveModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SaveModal: React.FC<SaveModalProps> = ({ setShowModal }) => {
  const [myArray, setMyArray] = useState<Array<{ english: string; uzbek: string }>>([]);
  const input1 = useRef<HTMLInputElement>(null);
  const input2 = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input1.current && input2.current) {
      const input1Value: string = input1.current.value;
      const input2Value: string = input2.current.value;
      const data = {
        english: input1Value,
        uzbek: input2Value,
      };
      setMyArray([...myArray, data]);
      input1.current.value = ""; // Clear the input fields after submission
      input2.current.value = "";
    }
  };

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(myArray));
  }, [myArray]);

  return (
    <div className="w-full h-full absolute top-0 right-0 left-0 bg-black opacity-90 bg-fixed">
      <div className="border inline-block py-4 px-4 rounded ml-[40%] mt-[15%]">
        <h1 className="text-white text-[22px] text-center mb-4">
          Add Your Word
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="text-white ml-4" htmlFor="">
            English
          </label>
          <input
            className="block px-3 py-2 text-[20px] rounded-[15px] mb-3"
            type="text"
            placeholder="Enter your word"
            ref={input1}
          />
          <label className="text-white ml-4" htmlFor="">
            Uzbek
          </label>
          <input
            className="block px-3 py-2 text-[20px] rounded-[15px] mb-3"
            type="textarea"
            placeholder="So'zni kiriting!"
            ref={input2}
          />
          <div className="flex justify-between mt-8">
            <button
              className="px-3 py-2 bg-white w-[45%] block rounded-[15px] text-[20px] text-red-500"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="px-3 py-2 bg-white w-[45%] block rounded-[15px] text-[20px]"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SaveModal;
