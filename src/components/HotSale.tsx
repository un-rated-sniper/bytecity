import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the type for each sale item
type SaleItem = {
  id: number;
  name: string;
  specs: string;
  details: string; // Additional details for the modal
};

// Define an array of hot sale items
const saleItems: SaleItem[] = [
  { id: 1, name: "LENOVO THINKPAD 495S", specs: "AMD RYZEN 5 PRO 8GB RAM 256GB SSD 2GB RADEON GRAPHICS | 500 SSD | 16 GB RAM", details: "2nd Gen AMD Ryzen Pro CPU, Radeon™ Vega Graphics, Lightweight and portable, Slim bezel display, All-day battery life, Top-notch security features, Optional WWAN connectivity" },
  { id: 2, name: "LENOVO THINKPAD 495S", specs: "AMD RYZEN 5 PRO 8GB RAM 256GB SSD 2GB RADEON GRAPHICS | 500 SSD | 16 GB RAM", details: "2nd Gen AMD Ryzen Pro CPU, Radeon™ Vega Graphics, Lightweight and portable, Slim bezel display, All-day battery life, Top-notch security features, Optional WWAN connectivity" },
  // Add more items as needed
];

// HotSales component definition
const HotSales: React.FC = () => {
  // State to track selected item and modal open/close status
  const [selectedItem, setSelectedItem] = useState<SaleItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle clicks on each sale item
  const handleClick = (item: SaleItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <Box className="container my-4 text-center">
      <Typography variant="h4" component="h2" color="primary" className="mb-4" style={{ color: "orange" }}>
        HOT SALE
      </Typography>
      
      <List>
        {saleItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => handleClick(item)} className="rounded shadow-sm mb-2" style={{ backgroundColor: "#f0f4f8" }}>
              <Typography variant="body1" style={{ fontWeight: "bold", color: "#333" }}>
                {item.name} {item.specs}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Modal for showing item details */}
      <Dialog open={isModalOpen} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle style={{ fontWeight: "bold", color: "#333" }}>
          {selectedItem?.name}
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1" color="textSecondary">
            Portable business partner
          </Typography>
          <Typography variant="h5" style={{ fontWeight: "bold", marginTop: "0.5rem" }}>
            {selectedItem?.name} (14") Laptop
          </Typography>
          <Typography variant="subtitle1" style={{ color: "#555" }}>
            New Options Available
          </Typography>
          <Box mt={2}>
            <Typography variant="body1" color="textSecondary">
              {selectedItem?.details}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={() => alert(`Ordering: ${selectedItem?.name}`)}>
            Order
          </Button>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HotSales;