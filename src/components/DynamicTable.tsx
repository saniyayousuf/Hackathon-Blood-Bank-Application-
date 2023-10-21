type tableProps = {
    label: string;
    datasourse: any[];
    cols: any[];
  };
  
  export default function Table(props: tableProps) {
    const { label, datasourse, cols } = props;
    return (
      <>
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                {cols.map((x, i) => (
                  <th >{x.heading}</th>
                
                ))}
              </tr>
            </thead>
            <tbody>
              {datasourse.map((row, i) => (
                <tr>
                  {cols.map((col, i) => (
                    <td key={i}>{col.type == "boolean"? row[col.key]?"Yes":"No":row[col.key] }</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }



//   sample datasource  
    // const datasource = [
    //     { id: 1, name: 'Zuniar', age: 30, isStudent: false },
    //     { id: 2, name: 'Zain', age: 25, isStudent: true },
    //     { id: 3, name: 'Hammad', age: 35, isStudent: false },
    //     { id: 4, name: 'Shahzain', age: 22, isStudent: true },
    //     { id: 5, name: 'Mehroz', age: 28, isStudent: false },
    //     { id: 6, name: 'Hassan', age: 29, isStudent: true },
        
    //   ];

    //   const columns = [
    //     { key: 'id', heading: 'ID' },
    //     { key: 'name', heading: 'Name' },
    //     { key: 'age', heading: 'Age' },
    //     { key: 'isStudent', heading: 'Student' },
    //   ];
