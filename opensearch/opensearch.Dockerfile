FROM docker.elastic.co/elasticsearch/elasticsearch-oss:7.10.2
RUN bin/elasticsearch-plugin install -b ingest-attachment analysis-icu