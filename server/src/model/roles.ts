import mongoose, { Model, Schema, Document, Types } from "mongoose";
import bcrypt from "bcryptjs";
import { Role } from "../types/role";
export interface IRole extends Document {
  role:String
  
}

export interface RoleModel extends Model<IRole> {}


const RoleSchema: Schema = new Schema(
 {
  
    role: {
      type: String,
      enum: ["USER", "ADMIN", "SYSADMIN"],
      required: true,
      unique: true,
    },
  
  },
  
  {
    timestamps: true,
  }
)

export const Roles = mongoose.model<IRole, RoleModel>("Roles", RoleSchema);
