'use client';

import { useAuth } from "@/Hooks/useAuth";
import { listTableAll } from "@/api/table/table";
import { TableSchema } from "@/api/table/tableSchemas";
import { FormEvent, useEffect, useState } from "react";
import { createTable } from "@/api/table/table";
import { Alert } from "@/utils/toast";

const images = [
  "https://th.bing.com/th/id/OIG2.dvILxEA9a03W9.A.l_q2?pid=ImgGn",
  "https://th.bing.com/th/id/OIG2.91skFEi9D.6WBrg5TOwv?pid=ImgGn",
  "https://th.bing.com/th/id/OIG2.2exSnL.8Ua1Vw2kkHpYW?pid=ImgGn",
  "https://th.bing.com/th/id/OIG2.GcCilM98rBcTdk6cDFS0?pid=ImgGn",
  "https://th.bing.com/th/id/OIG3.sTvoGFh.mfdit2tFjglm?pid=ImgGn",
  "https://th.bing.com/th/id/OIG3._Uuj2BnlGFqdR3fGZm17?pid=ImgGn",
  "https://th.bing.com/th/id/OIG3.YbigsoQwuxH2s0wkEihM?pid=ImgGn",
  "https://th.bing.com/th/id/OIG3.JcOKlOoTe.o9Mp9YArY1?pid=ImgGn",
  "https://th.bing.com/th/id/OIG4.RJgPKZoYtkD3sd0lM2zd?pid=ImgGn",
  "https://th.bing.com/th/id/OIG4.qlbfDWpqg7x2YoUY6UTg?pid=ImgGn",
  "https://th.bing.com/th/id/OIG4.9fOvPth6_9GopRomNkjl?pid=ImgGn",
  "https://th.bing.com/th/id/OIG4.DRb6ZeCYDJ0SDKRwZUr4?pid=ImgGn",
  "https://th.bing.com/th/id/OIG3.fWaE2x5h2lHNijgaC_7D?pid=ImgGn",
  "https://th.bing.com/th/id/OIG3.aEs6bqV8VH5YQKrJodkF?pid=ImgGn",
  "https://th.bing.com/th/id/OIG3.D6N.Lsf.k5U9DuksFrdd?pid=ImgGn",
  "https://th.bing.com/th/id/OIG3.tE6F7T5XFzXPr5cE.Pjc?pid=ImgGn",
  "https://th.bing.com/th/id/OIG2.AO2DFm7_fw8FiW9DQFXK?pid=ImgGn",
  "https://th.bing.com/th/id/OIG2.Zlb6RBovOdu3df1z8pxZ?pid=ImgGn",
  "https://th.bing.com/th/id/OIG2.GnFq2dhwI2hws2CKijek?pid=ImgGn",
  "https://th.bing.com/th/id/OIG2.zWxlQ_j_nuqP01__eCyV?pid=ImgGn",
  "https://th.bing.com/th/id/OIG1.T0Y7Xiz3YIveqSr1kyop?w=1024&h=1024&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIG1.QZoLme74pmZJvqyeLh_u?pid=ImgGn",
  "https://th.bing.com/th/id/OIG1.KE7zo_YYtEGNGvLQMeSU?pid=ImgGn",
  "https://th.bing.com/th/id/OIG1.n_CQ2XWnGjLr6ZUrDUq1?pid=ImgGn",
  "https://th.bing.com/th/id/OIG1.8B1p.wlFPgWkh_otfyVk?pid=ImgGn",
  "https://th.bing.com/th/id/OIG1.WWz85JQ8duG8H_ZL6O4n?pid=ImgGn",
  "https://th.bing.com/th/id/OIG1.SqFoAk7CL7LtolHQg3R8?pid=ImgGn",
  "https://th.bing.com/th/id/OIG1.stKprsfTnibcyoES5Cer?pid=ImgGn",
  "https://th.bing.com/th/id/OIG3.oYWezjtnAHPule6aLge7?pid=ImgGn",
  "https://th.bing.com/th/id/OIG3.V51pIL1w4tHzgBN.Fug2?pid=ImgGn",
  "https://th.bing.com/th/id/OIG3.Sqvf3az01kHiwAcST6mN?pid=ImgGn",
  "https://th.bing.com/th/id/OIG3.ZWn_Hru0FWtZVsssRy_8?pid=ImgGn",
  "https://th.bing.com/th/id/OIG2.wwKssU9QwA2bEWcJecr9?pid=ImgGn",
  "https://th.bing.com/th/id/OIG2.B3NXZ0_LWv8WL5tMsX_x?pid=ImgGn",
  "https://th.bing.com/th/id/OIG2.kXMXgZUi35mv6FQDneQm?pid=ImgGn",
  "https://th.bing.com/th/id/OIG2.y7b6zXRryoj0sXijae.x?pid=ImgGn"
]

export default function Example() {
  const auth = useAuth();
  const [tables, setTables] = useState([] as TableSchema[]);

  const [data, setData] = useState({
    name: "",
    description: "",
  });
  
  const getTables = () => {
    listTableAll().then((res) => {
      setTables(res);
    });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createTable(data)
      .then(() => {
        getTables()
        Alert(`creado con exito`, 'success');
      })
      .catch((res) => {
        console.log(res);
        Alert('Error en el servidor. Contacte con su administrador para más información.', 'error');
      });
  };

  useEffect(() => {
    auth.user && getTables();
  }, [auth]);
  return (
    <div className="w-full overflow-y-auto h-full flex flex-1 flex-row">
      <div className="w-1/2 flex flex-col h-screen space-y-4 overflow-y-auto">
      {tables.map((item) => <li key={item._id} className="flex py-6 bg-slate-50 px-4 mx-4 rounded-md">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src={images[Math.floor(Math.random() * images.length)]}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                  <a>{item.name}</a>
                </h3>
                <p className="ml-4"></p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        </li>)}
      </div>
      <div className="w-1/2 bg-white/80 p-5 rounded-md">
      <form onSubmit={(e) => submitHandler(e)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Tables</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            New Table
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Number
              </label>
              <div className="mt-2">
                <div className="flex rounded-md overflow-hidden shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 bg-slate-900 text-gray-200 sm:text-sm pr-3">Table:{' '} </span>
                  <input
                    type="text"
                    name="table"
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    value={data.name}
                    required
                    id="table"
                    className="block flex-1 pl-3 border-0 py-1.5 text-gray-900 bg-white placeholder:text-gray-700 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="01 - floor-2"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  onChange={(e) => setData({ ...data, description: e.target.value })}
                  value={data.description}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your table.</p>
            </div>
          </div>
        </div>
        </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
      </div>
    </div>
  )
}