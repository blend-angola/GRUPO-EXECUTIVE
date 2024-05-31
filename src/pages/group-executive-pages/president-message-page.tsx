import Container from "@/components/global/container"

const PresidentMessagePage = () => {
  return (
    <section className="w-full my-[80px]">
      <Container className="flex text-center flex-col gap-6 text-azul-dark">
        <h1 className="text-4xl md:text-5xl mb-6">Mensagem do presidente</h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          accusamus exercitationem dolorum rerum, quibusdam aliquam dignissimos
          error excepturi omnis perferendis.
        </p>
        <div className="relative w-full h-[40vh] md:h-screen mt-8">
          <iframe
            src="https://www.youtube.com/embed/9tlm6O3BARk"
            className="absolute inset-0 w-full h-full rounded-xl"
          ></iframe>
        </div>
      </Container>
    </section>
  )
}

export default PresidentMessagePage
