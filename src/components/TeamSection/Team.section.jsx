import React, { useState } from 'react';

import TeamCard from './TeamCard.component';
import SectionHeader from '../layout/Sections/SectionHeader.component';

const Team = () => {
  const [ACMTeam] = useState([
    {
      id: 1,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 2,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 3,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 4,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 5,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 6,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 7,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 8,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 9,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 10,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 11,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 12,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 13,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 14,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 15,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    },
    {
      id: 16,
      name: 'Your Name',
      designation: 'Designation',
      avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`
    }
  ]);

  return (
    <section className="container mx-auto text-center my-8">
      <SectionHeader>Team</SectionHeader>
      <div className="flex flex-row justify-center flex-wrap">
        {ACMTeam.map(member => (
          <TeamCard memberInfo={member} key={member.id} />
        ))}
      </div>
    </section>
  );
};

export default Team;
