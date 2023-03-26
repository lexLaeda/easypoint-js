import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type EmployeeCreateRequest, type IEmployee } from '../view/employee'

export const employeeApi = createApi({
  reducerPath: 'easyPoint/employee',
  baseQuery: fetchBaseQuery({
    baseUrl: 'employees',
    credentials: 'include'
  }),
  tagTypes: ['Employees'],
  refetchOnFocus: true,
  endpoints: build => ({
    searchEmployees: build.query<IEmployee[], void>({
      query: () => ({
        url: ''
      }),
      providesTags: ['Employees']
    }),
    createEmployee: build.mutation<IEmployee, EmployeeCreateRequest>({
      query (body) {
        return {
          url: '',
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'Employees' }]
    })
  })
})

export const { useSearchEmployeesQuery, useCreateEmployeeMutation } = employeeApi
