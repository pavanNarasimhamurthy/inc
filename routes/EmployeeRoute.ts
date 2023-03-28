// Import the express in typescript file
import express from 'express';
import { createEmployee, deleteEmployee,getAllEmployee, saveEmployeesFromFile} from '../controllers/EmployeeController';
import { validateCreateEmployee, validateDeleteEmployee } from '../middleware/validations';
var empRouter  = express.Router();

empRouter.post("/create",validateCreateEmployee,createEmployee); //purpose:To create a employee

empRouter.delete("/delete",validateDeleteEmployee,deleteEmployee);
empRouter.get("/get",getAllEmployee);
empRouter.get("/saveEmployeesFromFile",saveEmployeesFromFile); //purpose:To create a employee
export default empRouter;