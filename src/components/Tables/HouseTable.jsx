import PrimaryButton from "../Buttons/PrimaryButton";
import { formatDate } from "date-fns";

const HouseTable = ({ house, onDelete, setEdit, setEditFormOpen }) => {
  const date = new Date(house.availabilityDate);
  const formattedDate = formatDate(date, "yyyy-MM-dd");

  const handleEdit = (house) => {
    setEdit(house);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <tr>
      <td className="border border-gray-300 p-2">{house.name}</td>
      <td className="border border-gray-300 p-2">{house.address}</td>
      <td className="border border-gray-300 p-2">{formattedDate}</td>
      <td className="border border-gray-300 p-2">{house.rentPerMonth}</td>
      <td className="border border-gray-300 p-2">{house.phoneNumber}</td>
      <td className="border border-gray-300 p-2">
        <PrimaryButton
          classes={`px-2 py-1`}
          handler={() => {
            handleEdit(house);
            setEditFormOpen(true);
          }}
        >
          Edit
        </PrimaryButton>
      </td>
      <td className="border border-gray-300 p-2">
        <PrimaryButton
          classes={`px-2 py-1`}
          handler={() => handleDelete(house._id)}
        >
          Delete
        </PrimaryButton>
      </td>
    </tr>
  );
};

export default HouseTable;
