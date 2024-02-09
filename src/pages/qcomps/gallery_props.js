function Scientist({person, size=100}) {
  return (
    <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
          alt={person.name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awardNum} </b>
            {'(' + person.awards + ')'}
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Scientist
          person={{ name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG', 
          profession: 'physicist and chemist', awardNum: '4',
          awards: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
          discovered: 'polonium (element)'}}
          size={70} />
      <Scientist
          person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2', 
          profession: 'geochemist', awardNum: '2',
          awards: '(Miyake Prize for geochemistry, Tanaka Prize)',
          discovered: 'a method for measuring carbon dioxide in seawater'}}
          size={70} />
    </div>
  );
}
