'use client'
import Head from "next/head"
import Layout from "@/Layout";

const adminDashboard = () => {

    const columns = [
        {
          Header: "Name",
          accessor: "firstName"
        },
        {
          Header: "Email",
          accessor: "email"
        },
        {
          Header: "IBAN",
          accessor: "iban"
        },
        
      ];

      const initialState = {
        pageSize: 10,
        pageIndex: 0
      };
   
  return (
        <Layout>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 flex flex-col">
                            admin 
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
  )
}

export default adminDashboard