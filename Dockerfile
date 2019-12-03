FROM alpine:3.10

# HUGO Config
ENV HUGO_VERSION=0.59.1
ENV HUGO_TYPE=
# ENV HUGO_TYPE=_extended
ENV HUGO_ID=hugo${HUGO_TYPE}_${HUGO_VERSION}

ADD https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_ID}_Linux-64bit.tar.gz /tmp

RUN apk --no-cache add git

RUN apk add --update nodejs nodejs-npm

RUN tar -xf /tmp/${HUGO_ID}_Linux-64bit.tar.gz -C /tmp \
    && mkdir -p /usr/local/sbin \
    && mv /tmp/hugo /usr/local/sbin/hugo \
    && rm -rf /tmp/${HUGO_ID}_linux_amd64 \
    && rm -rf /tmp/${HUGO_ID}_Linux-64bit.tar.gz \
    && rm -rf /tmp/LICENSE.md \
    && rm -rf /tmp/README.md

# Setup container to expose port and where to look for files
EXPOSE 1313
VOLUME /app
WORKDIR /app

# Start the hugo server which is made available to localhost:1313
CMD ["hugo", "serve"]
