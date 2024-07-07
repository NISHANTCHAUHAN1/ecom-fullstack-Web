import React from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({addressInfo,buyNowFun,setAddressInfo}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="w-full px-4 py-3 text-center text-gray-100 bg-blue-gray-700 border border-transparent dark:border-gray-700 hover:border-blue-gray-600 hover:text-blue-gray-800 hover:bg-blue-gray-100 rounded-xl"
      >
        Buy now
      </Button>
      <Dialog open={open} handler={handleOpen} className=" bg-blue-gray-100">
        <DialogBody className="">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={addressInfo.name}
              onChange={(e) => setAddressInfo({...addressInfo, name: e.target.value})}
              placeholder="Enter your name"
              className="bg-blue-gray-100 border border-blue-gray-200 px-2 py-2 w-full rounded-md outline-none text-blue-gray-600 placeholder-blue-gray-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              value={addressInfo.address}
              onChange={(e) => setAddressInfo({...addressInfo, address : e.target.value})}
              placeholder="Enter your address"
              className="bg-blue-gray-100 border border-blue-gray-200 px-2 py-2 w-full rounded-md outline-none text-blue-gray-600 placeholder-blue-gray-300"
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="pincode"
              value={addressInfo.pincode}
              onChange={(e) => setAddressInfo({...addressInfo, pincode : e.target.value})}
              placeholder="Enter your pincode"
              className="bg-blue-gray-100 border border-blue-gray-200 px-2 py-2 w-full rounded-md outline-none text-blue-gray-600 placeholder-blue-gray-300"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="mobileNumber"
              value={addressInfo.mobileNumber}
              onChange={(e) => setAddressInfo({...addressInfo, mobileNumber : e.target.value})}
              placeholder="Enter your mobileNumber"
              className="bg-blue-gray-100 border border-blue-gray-200 px-2 py-2 w-full rounded-md outline-none text-blue-gray-600 placeholder-blue-gray-300"
            />
          </div>

          <div className="">
            <Button
              type="button"
              onClick={() => {
                handleOpen();
                buyNowFun();
              }}
              className="w-full px-4 py-3 text-center text-gray-100 bg-blue-gray-700 border border-transparent dark:border-gray-700 rounded-lg"
            >
              Buy now
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyNowModal;
