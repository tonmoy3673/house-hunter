import { useEffect, useState } from "react";
import AddHouseForm from "../../components/Forms/AddHouseForm";
import {
  deleteHouse,
  getAllHouses,
  postHouse,
  updateHouse,
} from "../../api/Houses";
import LoadingSpinner from "../../components/Loading/Loading";
import HouseTable from "../../components/Tables/HouseTable";
import UpdateHouse from "../../components/modals/UpdateHouse";

const AllHouses = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState();

  const handleAddHouse = async (formData) => {
    setLoading(true);
    try {
      await postHouse(formData);
      const response = await getAllHouses();
      setServices(response);
      setLoading(false);
    } catch (error) {
      console.error("Error posting house:", error);
    }
  };

  useEffect(() => {
    const getHouses = async () => {
      try {
        const response = await getAllHouses();
        setServices(response);
        setLoading(false);
      } catch (error) {
        console.error("Error posting house:", error);
      }
    };
    getHouses();
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this house?"
    );
    if (confirmDelete) {
      try {
        deleteHouse(id);
        const excluded = services.filter((item) => item._id !== id);
        setServices(excluded);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEdit = async (id, data) => {
    setLoading(true);
    try {
      await updateHouse(id, data);
      const response = await getAllHouses();
      setServices(response);
      setLoading(false);
    } catch (error) {
      console.error("Error updating house:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative p-0">
        {loading ? (
          <>
            <LoadingSpinner />
          </>
        ) : (
          <>
            {services?.length > 0 ? (
              <>
                <div className="container mx-auto min-h-screen p-8">
                  <div className="mb-6">
                    <button
                      className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition duration-300"
                      onClick={() => setFormOpen(true)}
                    >
                      Add New House
                    </button>
                  </div>

                  {isFormOpen && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-20">
                      <AddHouseForm
                        onClose={() => setFormOpen(false)}
                        onAddHouse={handleAddHouse}
                      />
                    </div>
                  )}

                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 p-2">Name</th>
                          <th className="border border-gray-300 p-2">
                            Address
                          </th>
                          <th className="border border-gray-300 p-2">
                            Availability Date
                          </th>
                          <th className="border border-gray-300 p-2">
                            Rent per Month
                          </th>
                          <th className="border border-gray-300 p-2">
                            Phone Number
                          </th>
                          <th className="border border-gray-300 p-2">Update</th>
                          <th className="border border-gray-300 p-2">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services?.map((house) => (
                          <HouseTable
                            key={house._id}
                            house={house}
                            onDelete={handleDelete}
                            setEdit={setEdit}
                            setEditFormOpen={setEditFormOpen}
                          ></HouseTable>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="container mx-auto p-8 min-h-screen flex flex-col justify-center items-center ">
                  <div className="text-center">
                    <h2 className="lg:text-[100px] text-4xl text-gray-200 font-extrabold ">
                      No Data Found
                    </h2>
                    <button
                      className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition duration-300"
                      onClick={() => setFormOpen(true)}
                    >
                      Add New House
                    </button>
                  </div>
                </div>
                {isFormOpen && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-20">
                    <AddHouseForm
                      onClose={() => setFormOpen(false)}
                      onAddHouse={handleAddHouse}
                    />
                  </div>
                )}
              </>
            )}
          </>
        )}
        {editFormOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-20">
            <UpdateHouse
              onClose={() => setEditFormOpen(false)}
              house={edit}
              updateData={handleEdit}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AllHouses;
