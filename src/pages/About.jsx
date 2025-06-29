const icons = [
  {
    id: 1,
    name: 'whatsapp',
    img: 'icon_images/whatsapp.png',
    link: ' https://wa.me/79182891114',

  },
  {
    id: 2,
    name: 'vk',
    img: 'icon_images/vk.png',
    link: 'https://m.vk.com/ilialokot',
  },
  {
    id: 3,
    name: 'facebook',
    img: 'icon_images/facebook.png',
    link: 'https://www.facebook.com/profile.php?id=100027567012201',
  },
  {
    id: 4,
    name: 'youtube',
    img: 'icon_images/youtube.png',
    link: 'https://www.youtube.com/channel/UCQjHR9iIFFfV74g0LlBvLKQ',
  },
  {
    id: 5,
    name: 'instagram',
    img: 'icon_images/instagram.png',
    link: 'https://www.instagram.com/isckroeb/',
  },
  {
    id: 6,
    name: 'telegram',
    img: 'icon_images/telegram.png',
    link: 'https://t.me/NiceDead_Machine',
  },
];

export default function About() {
  return (
    <>
      <div className="socialBlock">
        {icons.map(props => (
          <div className='iconContacts' key={props.id}>
            <a href={props.link}>
              <img src={props.img} alt={props.name} style={{ height: '50px' }} />
              <p style={{ fontSize: '12px', textAlign: 'center', fontWeight: 'bold' }}>{props.name}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
