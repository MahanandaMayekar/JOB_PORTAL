import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Paper,
} from "@mui/material";

const allCategories = [
  "Accounting",
  "Design",
  "Development",
  "Human Resource",
  "Marketing",
];

export const FirstLoginModal = ({
  onClose,
}: {
  onClose: (categories: string[]) => Promise<void> | void;
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSave = () => {
    console.log("Selected categories:", selectedCategories);
    onClose(selectedCategories); // Optionally pass `selectedCategories` to parent here
  };

  return (
    <Modal open onClose={onClose}>
      <Box className="flex items-center justify-center min-h-screen p-4">
        <Paper
          elevation={3}
          className="w-full max-w-lg p-8 rounded-2xl text-center space-y-6"
        >
          <Typography variant="h5" fontWeight={600}>
            Pick Your Interests
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Select categories you're interested in. This helps personalize your
            experience.
          </Typography>

          <FormGroup>
            <Box className="grid grid-cols-2 gap-3 mt-4">
              {allCategories.map((category) => (
                <FormControlLabel
                  key={category}
                  control={
                    <Checkbox
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleToggle(category)}
                    />
                  }
                  label={category}
                />
              ))}
            </Box>
          </FormGroup>

          <Button
            variant="contained"
            size="large"
            onClick={handleSave}
            sx={{
              borderRadius: "8px",
              backgroundColor: "#1976d2",
              ":hover": { backgroundColor: "#115293" },
              mt: 2,
            }}
          >
            Save & Continue
          </Button>
        </Paper>
      </Box>
    </Modal>
  );
};
