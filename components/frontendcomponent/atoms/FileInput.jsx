"use client";
import { useState } from "react";

export default function FileInput({
  name,
  id,
  onChange,
  classname = "",
  error = "Please Upload File",
  required = false,
}) {
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [fileError, setFileError] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    const fileName = file ? file.name.replace(/C:\\fakepath\\/i, "") : "";

    if (file && file.type !== "application/pdf") {
      setFileError("Please upload a PDF file only.");
      setIsValid(false);
      setIsActive(false);
      e.target.value = "";

      const fileNameEl = e.target.parentElement.querySelector(".file-name");
      if (fileNameEl) {
        fileNameEl.style.setProperty("--filenameinitial", "var(--filename)");
      }

      onChange?.(e);
      return;
    }

    const valid = !!file;

    // Set CSS custom property on the .file-name sibling (your SASS reads from this)
    const fileNameEl = e.target.parentElement.querySelector(".file-name");
    if (fileNameEl) {
      fileNameEl.style.setProperty(
        "--filenameinitial",
        fileName ? `"${fileName}"` : "var(--filename)",
      );
    }

    setFileError("");
    setIsValid(valid);
    setIsActive(valid);
    onChange?.(e);
  };

  return (
    <div
      className={`form-group file-input ${isActive ? "active" : ""} ${classname}`}
    >
      <input
        type="file"
        name={name}
        id={id}
        accept=".pdf,application/pdf"
        required={required}
        className={`form-control ${isValid ? "valid" : ""}`}
        onChange={handleChange}
      />
      <div className="file-name"></div>
      <div className="file_type">Pdf only (max size 2mb)</div>
      <div className="error">{fileError || error}</div>
    </div>
  );
}