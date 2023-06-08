"use client";
import React, { useState } from "react";

const CVForm = () => {
  const [CvName, setCvName] = useState("");
  const [PersonalInformation, setPersonalInformation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [Gender, setGender] = useState("");
  const [Generation, setGeneration] = useState ("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [National, setNational] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    // call a function to generate the CV with the user's data and photo, and apply styling
  };

  const handlePhotoUpload = (event) => {
    setPhoto(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label
          htmlFor="CvName"
          className="block text-gray-700 font-bold mb-2"
        >
          Cv name
        </label>
        <input
          type="text"
          id="CvName"
          placeholder="What is your cv name?"
          value={CvName}
          onChange={(event) => setCvName(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="PersonalInformation"
          className="block text-gray-700 font-bold mb-2"
        >
          Personal information
        </label>
        <input
          type="text"
          id="PersonalInformation"
          value={PersonalInformation}
          placeholder="Your Personal Information"
          onChange={(event) => setPersonalInformation(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-gray-700 font-bold mb-2"
        >
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="first name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="last name"
          className="block text-gray-700 font-bold mb-2"
        >
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="Gender"
          className="block text-gray-700 font-bold mb-2"
        >
          Gender:
        </label>
        <input
          type="text"
          id="gender"
          placeholder="Gender"
          value={Gender}
          onChange={(event) => setGender(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="Generation" className="block text-gray-700 font-bold mb-2">
          Generation
        </label>
        <input
          type="text"
          id="Generation"
          value={Generation}
          placeholder="Your Generation"
          onChange={(event) => setGeneration(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="Generation" className="block text-gray-700 font-bold mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          id="DateOfBirth"
          value={DateOfBirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Phone number:
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="+855 _ _ _ _ _"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="National" className="block text-gray-700 font-bold mb-2">
          National
        </label>
        <input
          type="text"
          id="National"
          value={National}
          placeholder="khmer"
          onChange={(event) => setNational(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
          address:
        </label>
        <input
          type="tel"
          id="address"
          value={address}
          placeholder="Current Address"
          onChange={(event) => setaddress(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
          Upload a photo:
        </label>
        <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={handlePhotoUpload}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generate my resume
        </button>
      </div>
    </form>
  );
};

export default CVForm;


