import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { MdOutlinePlace } from "react-icons/md";
import { BsCalendarWeek, BsInstagram } from "react-icons/bs";

export default function Setting() {
  return (
    <div className="flex justify-center flex-wrap m-20 ">
      <img src="./settings.svg" className="max-w-[1200px]" alt="" />
      <div className="max-w-[1000px] my-2">
        <h1 className="text-2xl font-semibold">Selamat datang di NoStudio!</h1>
        <p className="text-justify">
          Kami adalah destinasi yang menghidupkan kembali kenangan indah dari
          masa lalu. Di Nostalgia Studio, kami percaya bahwa setiap momen
          memiliki cerita yang tak terlupakan, dan kami berdedikasi untuk
          membawa Anda kembali ke waktu yang penuh dengan kenangan yang
          berharga.
        </p>
        <br />
        <hr className="text-col3  py-2" />
        <div>
          <h1 className="text-lg font-semibold">Profile Kami</h1>
          <div className="flex flex-row items-center my-1 gap-2">
            <MdOutlinePlace size={40} className="text-gray-800 " />
            <h3>Bandung, Indonesia</h3>
          </div>
          <div className="flex flex-row items-center m-1 gap-3">
            <BsCalendarWeek size={28} />
            <h3>Sabtu - Kamis</h3>
          </div>
          <div className="flex flex-row items-center my-2 ml-1 gap-3">
            <BsInstagram size={28} />
            <h3>@noStudio_</h3>
          </div>
        </div>
        <br />
        <hr className="text-col3  py-2" />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Theme</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="light"
            name="radio-buttons-group"
          >
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel
              value="earth"
              control={<Radio />}
              label="Earth Girl"
            />
          </RadioGroup>
        </FormControl>

        <br />
        <hr className="text-col3  py-2" />
        <h3 className="text-md text-gray-600 mb-4">Application Version</h3>
        <div className="flex gap-4">
          <Button variant="contained" disabled>
            versi 1.0
          </Button>
          <Button
            variant="contained"
            onClick={() => console.log("coming soon")}
          >
            Versi 2.0
          </Button>
        </div>
      </div>
    </div>
  );
}
