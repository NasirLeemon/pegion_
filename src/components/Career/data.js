import { AiOutlineTeam } from "react-icons/ai";
import { FaBriefcase, FaHandshake, FaUserGraduate } from "react-icons/fa";

const briefcaseIcon = <FaBriefcase size={32} color="#053e6c" />;
const graduateIcon = <FaUserGraduate size={32} color="#053e6c" />;
const handshakeIcon = <FaHandshake size={32} color="#053e6c" />;
const teamIcon = <AiOutlineTeam size={32} color="#053e6c" />;

export const careersData = [
  {
    id: 1,
    icon: briefcaseIcon,
    title: 'Software Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus luctus nulla. Aenean vel turpis in nunc consequat ultricies quis vitae velit.',
  },
  {
    id: 2,
    icon: graduateIcon,
    title: 'Data Analyst',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus luctus nulla. Aenean vel turpis in nunc consequat ultricies quis vitae velit.',
  },
  {
    id: 3,
    icon: handshakeIcon,
    title: 'Marketing Manager',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus luctus nulla. Aenean vel turpis in nunc consequat ultricies quis vitae velit.',
  },
  {
    id: 4,
    icon: teamIcon,
    title: 'Sales Representative',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus luctus nulla. Aenean vel turpis in nunc consequat ultricies quis vitae velit.',
  },
];