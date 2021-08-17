import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
type Data = {
  avatar: string;
  email: string;
  first_name: number;
  id: number;
  last_name: string;
};

interface Response {
  data: Array<{
    avatar: string;
    email: string;
    first_name: number;
    id: number;
    last_name: string;
  }>;
}
const DashboardService = async (page: number) => {
  try {
    const url = 'https://reqres.in/api/users?page=' + page;
    const response = await axios.get<Response, AxiosResponse<Response>>(url);
    if (response) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default DashboardService;
