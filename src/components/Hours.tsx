import React from 'react';

// Definisi tipe untuk struktur data tabel
type TableRow = {
  Mo: string;
  Di: string;
  Mi: string;
  Do: string;
  Fr: string;
  Sa: string;
  So: string;
};

const tableHeaders = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

const Hours = () => {
  // Menyediakan data tabel dengan tipe yang sudah ditentukan
  const tableData: TableRow[] = [
    {
      Mo: "01",
      Di: "02",
      Mi: "03",
      Do: "04",
      Fr: "05",
      Sa: "06",
      So: "07",
    },
    {
      Mo: "08",
      Di: "09",
      Mi: "10",
      Do: "11",
      Fr: "12",
      Sa: "13",
      So: "14",
    },
    {
      Mo: "15",
      Di: "16",
      Mi: "17",
      Do: "18",
      Fr: "19",
      Sa: "20",
      So: "21",
    },
    {
      Mo: "22",
      Di: "23",
      Mi: "24",
      Do: "25",
      Fr: "26",
      Sa: "27",
      So: "28",
    },
    {
      Mo: "29",
      Di: "30",
      Mi: "31",
      Do: "32",
      Fr: "34",
      Sa: "35",
      So: "36",
    },
    {
      Mo: "37",
      Di: "38",
      Mi: "39",
      Do: "40",
      Fr: "41",
      Sa: "42",
      So: "43",
    },
    {
      Mo: "44",
      Di: "45",
      Mi: "46",
      Do: "47",
      Fr: "48",
      Sa: "49",
      So: "50",
    },
    {
      Mo: "51",
      Di: "52",
      Mi: "53",
      Do: "54",
      Fr: "55",
      Sa: "56",
      So: "57",
    },
  ];

  return (
    <div>
      <div className='container mx-auto max-w-[1218px] md:mt-1 mb-20'>
        <div className="">
          <div>
            <div className="">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    
                  </thead>
                  <tbody>
                    {tableData.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className={rowIndex % 2 === 0 ? "bg-[#e9ebef]" : "bg-[#e9ebef]"}
                      >
                        {tableHeaders.map((header) => (
                          <td key={header} className="py-1 px-2 text-[13px] font-space-grotesk border text-center hover:bg-[#fff] border-gray-300">
                            {row[header as keyof TableRow]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hours;
