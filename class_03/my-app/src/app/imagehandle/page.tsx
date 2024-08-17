import React from "react";
import Image from "next/image";
import carImage from "@/assets/img.jpeg";
export default function page() {
  return (
    <div>
      <Image
        src={
          "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        height={100}
        width={100}
        alt="Image"
      />

      <Image src={carImage} height={100} width={100} alt="Image" />
      <Image src={"/img.jpeg"} height={100} width={100} alt="Image" />
    </div>
  );
}
