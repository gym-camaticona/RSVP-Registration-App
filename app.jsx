
class Model {
  constructor() {
    this.invitaciones = [

    ],
      this.callback = null;
  }

  suscribe(render) {
    this.callback = render;
  }

  notify() {
    this.callback();
  }

  newInvitation(name) {
    console.log(name.value);
    this.invitaciones.push({
      name: this.input.value,
    })
    this.callback();
    this.notify();
  }

  // array.splice(x, 1);
  // donde x es el indice que deseas eliminar
  removeInvitate(e, index) {
    this.invitados.splice(index, 1);
    this.notify();
}

  newList() {
    let list = "";
    if (this.invitaciones.length != 0) {
      list = this.invitaciones.map((item, index) => {
        return (
          <li key={index}>
            {item.name}
            <label>confirmed<input type="checkbox" /></label>
            <button onClick={e => model.removerInvitado(e, index)}>remove</button>       
          </li>
        )
      });
    }
    return (<ul>{list}</ul>)//ul en css para que se forme como tarjetas
    this.callback();
    this.notify();
  }
}

const Header = () => {
  return (
    <div>
      <header>
        <h1>RSVP</h1>
        <p> Registration App </p>
        <form id="registrar" onSubmit={e => {
          e.preventDefault();
          model.newInvitation(model.input);
        }}>
          <input
            type="text"
            onChange={e => (model.input = e.target)}
            name="name"
            placeholder="Invite Someone" />
          <button type="submit" name="submit">Submit</button>
        </form>
      </header>
    </div>
  )
}

const MostrarLista = ({ model }) => {
  return (
    <div>
      <div className="main">
        <h2>Invitees</h2>
        {model.newList()}
      </div>
    </div>
  )
}

const Application = ({ title, model }) => {
  return (
    <div >
      <Header model={model} />
      <MostrarLista model={model} />

    </div>
  );
}

let model = new Model();
let counter = 1;
let render = () => {
  console.log('render times: ', counter++);
  ReactDOM.render(
    <Application title="TodoApp" model={model} />,
    document.getElementById('container')
  );
};

model.suscribe(render);
render(); 