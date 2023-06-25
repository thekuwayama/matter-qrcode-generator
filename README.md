# matter-qrcode-generator

[![CI](https://github.com/thekuwayama/matter-qrcode-generator/workflows/CI/badge.svg)](https://github.com/thekuwayama/matter-qrcode-generator/actions?workflow=CI)
[![license](https://img.shields.io/crates/l/asaru.svg)](https://raw.githubusercontent.com/thekuwayama/asaru/main/LICENSE-APACHE)
[![dependency status](https://deps.rs/repo/github/thekuwayama/matter-qrcode-generator/status.svg)](https://deps.rs/repo/github/thekuwayama/matter-qrcode-generator)

`matter-qrcode-generator` is QR-code generator for Matter.


```sh-session
$ matter-qrcode-generator 65521 32770 2 1 aabbccdd test 123456 250
Pairing Code: 0087-6800-071

█████████████████████████████████████
█████████████████████████████████████
████ ▄▄▄▄▄ █▄██▄████▀▄ ▄ █ ▄▄▄▄▄ ████
████ █   █ █▀▀▀█▀▄▀  ▀█▄ █ █   █ ████
████ █▄▄▄█ █  █▄▄  ▀▄ ▀▄▄█ █▄▄▄█ ████
████▄▄▄▄▄▄▄█ ▀▄▀ █ █▄▀▄█ █▄▄▄▄▄▄▄████
████▄▀██▄▀▄  ▄██▀▄▄▄▄▀  ▄▄▄   ██▄████
████ █ ▄▀ ▄▄█▀▀▄  ▄ ▀ ▄█▄▀ ▀█ ▀▀ ████
█████ ▄█▄▀▄▀▄█▀▄  ▀█▀  █▀▀▄▄ ▄▀▀ ████
████▄▄  █ ▄█  ▄███▀█▄▄  █ ▀▄█ ▄█▄████
████▀▀ ▄▄▀▄▀ ▄█▄▄▄▄▄▄▀█▄▀█▀▄▄ ▀  ████
██████▄▄▀ ▄▄▀ █▀▀ ▄ ▀ ▀█▄ ▀▄█▀ ▄█████
████▄▄▄█▄▄▄▄ ▀███ ▀█▀▀█▀ ▄▄▄ ▀   ████
████ ▄▄▄▄▄ █▄▀▄▀▄█▀█▄▄█▀ █▄█ ▀▄▄▀████
████ █   █ █▄▄ ▄▄ ▄▄█ █▀ ▄▄ ▄ █ █████
████ █▄▄▄█ ██ ▄▀███  ▀▄██  █▄▄▄ ▄████
████▄▄▄▄▄▄▄█▄████▄▄███▄█▄███▄▄▄██████
█████████████████████████████████████
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
```

## Install

You can install `matter-qrcode-generator` with the following:

```sh-session
$ cargo install --git https://github.com/thekuwayama/matter-qrcode-generator.git --branch main
```


## Usage

```sh-session
$ matter-qrcode-generator --help
QR-code generator for Matter

Usage: matter-qrcode-generator <VENDOR_ID> <PRODUCT_ID> <HARDWARE_VERSION> <SOFTWARE_VERSION> <SERIAL_NUMBER> <DEVICE_NAME> <VERIFIER> <DISCRIMINATOR>

Arguments:
  <VENDOR_ID>         Vendor ID
  <PRODUCT_ID>        Product ID
  <HARDWARE_VERSION>  hardware version
  <SOFTWARE_VERSION>  software version
  <SERIAL_NUMBER>     serial number
  <DEVICE_NAME>       device name
  <VERIFIER>          verifier
  <DISCRIMINATOR>     discriminator

Options:
  -h, --help     Print help
  -V, --version  Print version
```


## License

Licensed under either of

- Apache License, Version 2.0 ([LICENSE-APACHE](https://github.com/thekuwayama/cron_cal/blob/main/LICENSE-APACHE) or http://apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT](https://github.com/thekuwayama/cron_cal/blob/main/LICENSE-MIT) or http://opensource.org/licenses/MIT)
