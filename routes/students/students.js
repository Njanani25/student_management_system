const express = require("express");
const router = express.Router();
const Student = require("../../db/schemas/studentSchema"); // Path to  student schema
const Department = require("../../db/schemas/departmentSchema"); // Path to  department schema

// 1. List and search students
router.get("/students", async (req, res) => {
    try {
        const queryParams = req.query;
        const filter = {};

        // Filtering by student name
        if (queryParams.name) {
            filter.name = { $regex: new RegExp(queryParams.name, "i") }; // Case insensitive search
        }

        const students = await Student.find(filter).populate('department'); // Populate department details
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// 2. Add a new student
router.post("/students", async (req, res) => {
    try {
        const studentData = req.body; // Get student data from request body

        // Check for existing student with the same registration number
        const existingStudent = await Student.findOne({ registrationNumber: studentData.registrationNumber });
        if (existingStudent) {
            return res.status(400).json({ message: "Registration number must be unique." });
        }

        const newStudent = new Student(studentData); // Create a new student instance
        await newStudent.save(); // Save the student to the database
        res.status(201).json({ message: "Student added successfully", student: newStudent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// 3. Get students by department
router.get("/students/department/:departmentId", async (req, res) => {
    try {
        const departmentId = req.params.departmentId; // Get department ID from route parameters
        const students = await Student.find({ department: departmentId }).populate('department'); // Find students in the specified department

        if (students.length === 0) {
            return res.status(404).json({ message: "No students found in this department." });
        }

        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// 4. Delete a student
router.delete("/students/:id", async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id); // Delete student by ID
        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// 5. List all departments
router.get("/departments", async (req, res) => {
    try {
        const departments = await Department.find(); // Find all departments
        res.status(200).json(departments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// 6. Add a new department
router.post("/departments", async (req, res) => {
    try {
        const departmentData = req.body; // Get department data from request body

        // Check for existing department with the same name
        const existingDepartment = await Department.findOne({ name: departmentData.name });
        if (existingDepartment) {
            return res.status(400).json({ message: "Department name must be unique." });
        }

        const newDepartment = new Department(departmentData); // Create a new department instance
        await newDepartment.save(); // Save the department to the database
        res.status(201).json({ message: "Department added successfully", department: newDepartment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// 7. Delete a department
router.delete("/departments/:id", async (req, res) => {
    try {
        const deletedDepartment = await Department.findByIdAndDelete(req.params.id); // Delete department by ID
        if (!deletedDepartment) {
            return res.status(404).json({ message: "Department not found" });
        }
        res.status(200).json({ message: "Department deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Export the router
module.exports = router;
