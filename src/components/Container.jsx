import { Parallax } from 'react-parallax';

const Container = () => (
    <Parallax blur={10} bgImage="https://www.jonchristie.net/favicon.png" bgImageAlt="the cat" strength={200}>
       <Container className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          <h1 className="text-2xl">Parallax</h1>
          <p className="text-lg">Scroll down to see the next section 👇</p>
        </Container>

    </Parallax>
);

export default Container;