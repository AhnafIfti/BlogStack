import React from "react";
import { Image } from "react-bootstrap";

const UserProfilePicture = ({ src, alt, size }) => {
  return (
    <Image
      src={src}
      alt={alt}
      roundedCircle
      width={size}
      height={size}
      style={{ objectFit: "cover" }}
    />
  );
};

export default UserProfilePicture;
