# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-uswds"
  spec.version       = "0.2.2"
  spec.authors       = ["Shawn Allen"]
  spec.email         = ["shawn.allen@gsa.gov"]

  spec.summary       = %q{A Jekyll theme for the U.S. Web Design Standards}
  spec.homepage      = "https://standards.usa.gov/"
  spec.license       = "CC0-1.0"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.4"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
