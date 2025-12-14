"use client";
import AddressCard from "@/components/user/AddressCard";
import { AddressModal } from "@/components/user/AddressModal";
import { ConfirmDeleteModal } from "@/components/user/ConfirmDeleteModal";
import { useState } from "react";

function AddressesSection() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleSaveAddress = (data : any) => {
    console.log("Saved address:", data);
  };

  const handleDeleteAddress = () => {
    console.log("Deleted address");
  };

  const editAddress = {
    title: "Home",
    name: "Sarah Johnson",
    address: "324 King St. Owosso, MI 48867",
    phone: "+1 888-456-668",
    isDefault: true,
  };
  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Saved Addresses</h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer"
          >
            Add New
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AddressCard
          title="Home"
          name="Sarah Johnson"
          address="324 King St. Owosso, MI 48867"
          phone="+1 888-456-668"
          isDefault
          onEdit={() => setShowEditModal(true)}
          onRemove={() => setShowDeleteModal(true)}
        />
        <AddressCard
          title="Office"
          name="Sarah Johnson"
          address="281 Virginia Ave. Westwood, NJ 07675"
          phone="+1 888-456-668"
          onEdit={() => setShowEditModal(true)}
          onRemove={() => setShowDeleteModal(true)}
        />
        </div>
      </div>
      {/* Modals */}
      <AddressModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleSaveAddress}
      />

      <AddressModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedAddress(null);
        }}
        onSave={handleSaveAddress}
        address={selectedAddress}
      />

      <ConfirmDeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteAddress}
        addressTitle="Home"
      />
    </>
  );
}

export default AddressesSection;
