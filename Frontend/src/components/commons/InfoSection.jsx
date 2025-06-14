const InfoSection = ({ title, highlight, subtitle, cards,fromInsta=true }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">
          {title}{" "}
          <span className={`${fromInsta?"text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600":"text-gradient"}`}>
            {highlight}
          </span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          {subtitle}
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl text-center shadow-xl hover:shadow transition pt-6"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="h-20 object-contain object-center mx-auto mb-4"
              />
              <h3 className="font-semibold text-base mb-2 px-6">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 px-6 mb-6">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
