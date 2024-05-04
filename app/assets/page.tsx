export default async function Page() {
  const res = await fetch(
    `https://my-json-server.typicode.com/tractian/fake-api/assets`
  );
  const data: any = await res.json();

  return (
    <>
      <h3>Ativos</h3>

    
          return (
            <>
              <p>
                <b>Nome:</b> majed
              </p>
              <img
                src={'./'}
                style={{ width: 280, height: 250, padding: 10 }}
              />
              <p>
                <b>id:</b> ff
              </p>
              <p>
                <b>Sensor:</b> ff
              </p>
              <p>
                <b>Modelo:</b>ff
              </p>
              <p>
                <b>Status:</b> fff
              </p>
              <p>
                <b>Saúde:</b> ff
              </p>
              <p>
                <b>Métricas:</b>
              </p>
              <p>totalCollectsUptime: ff</p>
              <p>totalUptime: fff</p>
              <p>lastUptimeAt: fff</p>
              <p>
                <b>Especificações:</b>
              </p>
              <p>power: fff</p>
              <p>maxTemp: fff</p>
              <p>rpm: fff</p>
              <p>
                <b>unitId:</b> ffff
              </p>
              <p>
                <b>companyId:</b> fff
              </p>
              <hr />
            </>
          );
        
    </>
  );
}
