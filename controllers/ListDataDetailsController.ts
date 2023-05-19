import { Request, Response} from 'express';
import { Listdatadetails } from '../models/ListDataDetailsModels';
import { Listdatamaster } from '../models/ListDataMasterModule';
import { Util } from '../utility/utils';
import { statusCodes } from '../utility/constants';

export class ListDataDetailsController{
    async CreateListDataDetails(req: Request,res: Response){
        try {            
            const listdatadetails = await Util.createData(Listdatadetails,req.body);
            if(listdatadetails.status > 299){
                return res.json(Listdatadetails)
            }
            else{
                const result = await Util.saveData(Listdatadetails,listdatadetails.data)
                return res.json(result)
            }                    
        } catch (error) {
            let returnObj = await Util.returnObj([error],statusCodes.error,'listdatadetails','createerr')
            return res.json(returnObj)           
        }
    }

    async getAllListDataDetails(req: Request,res: Response){
        try {
            // const user = await appDataSource.getRepository(Employee).create(req.body)
            const listdatadetails = await Util.getAllData(Listdatadetails,req.body);
            if(listdatadetails.status > 299){
                let returnObj = await Util.returnObj([listdatadetails.data],statusCodes.error,'listdatadetails','getallerr')
                return res.json(returnObj)
            }
            else{
                let returnObj = await Util.returnObj(listdatadetails.data,statusCodes.error,'listdatadetails','getall')
                return res.json(returnObj)            
            }                
        } catch (error) {
            let returnObj = await Util.returnObj([error],statusCodes.error,'listdatadetails','getallerr')
            return res.json(returnObj)        
        }
    }
    
    async getDetailsByMasterId(req: Request,res: Response){
        try {
            // const user = await appDataSource.getRepository(Employee).create(req.body)
            const listdatadetails = await Util.getbyIDData(Listdatadetails,req.body);
            if(listdatadetails.status > 299){
                let returnObj = await Util.returnObj([listdatadetails.data],statusCodes.error,'listdatadetails','getallerr')
                return res.json(returnObj)
            }
            else{
                let returnObj = await Util.returnObj(listdatadetails.data,statusCodes.error,'listdatadetails','getall')
                return res.json(returnObj)            
            }                
        } catch (error) {
            let returnObj = await Util.returnObj([error],statusCodes.error,'listdatadetails','getallerr')
            return res.json(returnObj)        
        }
    }
    
    // async getDetailsByDetailId(req: Request,res: Response){
    //     try {
    //         // const user = await appDataSource.getRepository(Employee).create(req.body)
    //         const listdatadetails = await Util.getbyIDData(Listdatadetails,req.body);
    //         if(listdatadetails.status > 299){
    //             let returnObj = await Util.returnObj([listdatadetails.data],statusCodes.error,'listdatadetails','getallerr')
    //             return res.json(returnObj)
    //         }
    //         else{
    //             let returnObj = await Util.returnObj(listdatadetails.data,statusCodes.error,'listdatadetails','getall')
    //             return res.json(returnObj)            
    //         }                
    //     } catch (error) {
    //         let returnObj = await Util.returnObj([error],statusCodes.error,'listdatadetails','getallerr')
    //         return res.json(returnObj)        
    //     }
    // }

    async getDetailsBylstDtlCode(req: Request,res: Response){
        try {
            // const user = await appDataSource.getRepository(Employee).create(req.body)
            const listdatadetails = await Util.getbycode(Listdatadetails,req.body);
            if(listdatadetails.status > 299){
                let returnObj = await Util.returnObj([listdatadetails.data],statusCodes.error,'listdatadetails','getallerr')
                return res.json(returnObj)
            }
            else{
                let returnObj = await Util.returnObj(listdatadetails.data,statusCodes.error,'listdatadetails','getall')
                return res.json(returnObj)            
            }                
        } catch (error) {
            let returnObj = await Util.returnObj([error],statusCodes.error,'listdatadetails','getallerr')
            return res.json(returnObj)        
        }
    }
    
    async deleteDetailsBylstDtlCode(req: Request,res: Response){
        try {
            // const user = await appDataSource.getRepository(Employee).create(req.body)
            const listdatadetails = await Util.deleteData(Listdatadetails,req.body);
            if(listdatadetails.status > 299){
                let returnObj = await Util.returnObj([listdatadetails.data],statusCodes.error,'listdatadetails','getallerr')
                return res.json(returnObj)
            }
            else{
                let returnObj = await Util.returnObj(listdatadetails.data,statusCodes.error,'listdatadetails','getall')
                return res.json(returnObj)            
            }                
        } catch (error) {
            let returnObj = await Util.returnObj([error],statusCodes.error,'listdatadetails','getallerr')
            return res.json(returnObj)        
        }
    }
   
    // async deleteMasterbyDtlId(req: Request,res: Response){
    //     try {
    //         // const user = await appDataSource.getRepository(Employee).create(req.body)
    //         const listdatadetails = await Util.deleteData(Listdatadetails,req.body);
    //         if(listdatadetails.status > 299){
    //             let returnObj = await Util.returnObj([listdatadetails.data],statusCodes.error,'listdatadetails','getallerr')
    //             return res.json(returnObj)
    //         }
    //         else{
    //             let returnObj = await Util.returnObj(listdatadetails.data,statusCodes.error,'listdatadetails','getall')
    //             return res.json(returnObj)            
    //         }                
    //     } catch (error) {
    //         let returnObj = await Util.returnObj([error],statusCodes.error,'listdatadetails','getallerr')
    //         return res.json(returnObj)        
    //     }
    // }

    async deleteDetailbyMstId(req: Request,res: Response){
        try {
            // const user = await appDataSource.getRepository(Employee).create(req.body)
            const listdatadetails = await Util.deleteData(Listdatadetails,req.body);
            if(listdatadetails.status > 299){
                let returnObj = await Util.returnObj([listdatadetails.data],statusCodes.error,'listdatadetails','getallerr')
                return res.json(returnObj)
            }
            else{
                let returnObj = await Util.returnObj(listdatadetails.data,statusCodes.error,'listdatadetails','getall')
                return res.json(returnObj)            
            }                
        } catch (error) {
            let returnObj = await Util.returnObj([error],statusCodes.error,'listdatadetails','getallerr')
            return res.json(returnObj)        
        }
    }
}