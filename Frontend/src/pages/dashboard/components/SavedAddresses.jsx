import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { PlusCircle } from "lucide-react";

const AddressCard = ({ address }) => (
  <Card>
    <CardHeader>
      <CardTitle>{address.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{address.street}</p>
      <p>
        {address.city}, {address.state} {address.zip}
      </p>
      <p>{address.country}</p>
      <div className="mt-4 space-x-2">
        <Button variant="outline" size="sm">Edit</Button>
        <Button variant="outline" size="sm">Delete</Button>
      </div>
    </CardContent>
  </Card>
);

AddressCard.propTypes = {
  address: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }).isRequired
};

const AddNewAddressCard = () => (
  <Card className="flex flex-col items-center justify-center h-full">
    <CardContent className="text-center">
      <PlusCircle className="h-12 w-12 text-muted-foreground mb-4" />
      <Button>Add New Address</Button>
    </CardContent>
  </Card>
);

const SavedAddresses = () => {
  const [addresses] = useState([
    {
      id: 1,
      name: "John Doe",
      street: "123 Main St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      country: "USA"
    },
    {
      id: 2,
      name: "Jane Smith",
      street: "456 Elm St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA"
    }
  ]);
  

  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Addresses</CardTitle>
        <CardDescription>Manage your saved addresses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {addresses.length > 0 ? (
            addresses.map((address) => <AddressCard key={address.id} address={address} />)
          ) : (
            <p className="text-muted-foreground">No saved addresses yet.</p>
          )}
          <AddNewAddressCard />
        </div>
      </CardContent>
    </Card>
  );
};

export default SavedAddresses;
