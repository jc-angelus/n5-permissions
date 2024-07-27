using Confluent.Kafka;

namespace N5.Permissions.Shared.Kafka.Producer
{
    public class KafkaProducerConfig<Tk, Tv> : ProducerConfig
    {
        public string Topic { get; set; }
    }
}