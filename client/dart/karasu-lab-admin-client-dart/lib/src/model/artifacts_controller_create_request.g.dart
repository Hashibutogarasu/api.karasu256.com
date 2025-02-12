// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'artifacts_controller_create_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ArtifactsControllerCreateRequest
    extends ArtifactsControllerCreateRequest {
  @override
  final String name;
  @override
  final String? description;
  @override
  final String? iconUrl;
  @override
  final String? oneSetEffect;
  @override
  final String? twoSetEffect;
  @override
  final String? fourSetEffect;
  @override
  final String version;

  factory _$ArtifactsControllerCreateRequest(
          [void Function(ArtifactsControllerCreateRequestBuilder)? updates]) =>
      (new ArtifactsControllerCreateRequestBuilder()..update(updates))._build();

  _$ArtifactsControllerCreateRequest._(
      {required this.name,
      this.description,
      this.iconUrl,
      this.oneSetEffect,
      this.twoSetEffect,
      this.fourSetEffect,
      required this.version})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        name, r'ArtifactsControllerCreateRequest', 'name');
    BuiltValueNullFieldError.checkNotNull(
        version, r'ArtifactsControllerCreateRequest', 'version');
  }

  @override
  ArtifactsControllerCreateRequest rebuild(
          void Function(ArtifactsControllerCreateRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  ArtifactsControllerCreateRequestBuilder toBuilder() =>
      new ArtifactsControllerCreateRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ArtifactsControllerCreateRequest &&
        name == other.name &&
        description == other.description &&
        iconUrl == other.iconUrl &&
        oneSetEffect == other.oneSetEffect &&
        twoSetEffect == other.twoSetEffect &&
        fourSetEffect == other.fourSetEffect &&
        version == other.version;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, oneSetEffect.hashCode);
    _$hash = $jc(_$hash, twoSetEffect.hashCode);
    _$hash = $jc(_$hash, fourSetEffect.hashCode);
    _$hash = $jc(_$hash, version.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'ArtifactsControllerCreateRequest')
          ..add('name', name)
          ..add('description', description)
          ..add('iconUrl', iconUrl)
          ..add('oneSetEffect', oneSetEffect)
          ..add('twoSetEffect', twoSetEffect)
          ..add('fourSetEffect', fourSetEffect)
          ..add('version', version))
        .toString();
  }
}

class ArtifactsControllerCreateRequestBuilder
    implements
        Builder<ArtifactsControllerCreateRequest,
            ArtifactsControllerCreateRequestBuilder> {
  _$ArtifactsControllerCreateRequest? _$v;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _iconUrl;
  String? get iconUrl => _$this._iconUrl;
  set iconUrl(String? iconUrl) => _$this._iconUrl = iconUrl;

  String? _oneSetEffect;
  String? get oneSetEffect => _$this._oneSetEffect;
  set oneSetEffect(String? oneSetEffect) => _$this._oneSetEffect = oneSetEffect;

  String? _twoSetEffect;
  String? get twoSetEffect => _$this._twoSetEffect;
  set twoSetEffect(String? twoSetEffect) => _$this._twoSetEffect = twoSetEffect;

  String? _fourSetEffect;
  String? get fourSetEffect => _$this._fourSetEffect;
  set fourSetEffect(String? fourSetEffect) =>
      _$this._fourSetEffect = fourSetEffect;

  String? _version;
  String? get version => _$this._version;
  set version(String? version) => _$this._version = version;

  ArtifactsControllerCreateRequestBuilder() {
    ArtifactsControllerCreateRequest._defaults(this);
  }

  ArtifactsControllerCreateRequestBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _name = $v.name;
      _description = $v.description;
      _iconUrl = $v.iconUrl;
      _oneSetEffect = $v.oneSetEffect;
      _twoSetEffect = $v.twoSetEffect;
      _fourSetEffect = $v.fourSetEffect;
      _version = $v.version;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ArtifactsControllerCreateRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$ArtifactsControllerCreateRequest;
  }

  @override
  void update(void Function(ArtifactsControllerCreateRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  ArtifactsControllerCreateRequest build() => _build();

  _$ArtifactsControllerCreateRequest _build() {
    final _$result = _$v ??
        new _$ArtifactsControllerCreateRequest._(
            name: BuiltValueNullFieldError.checkNotNull(
                name, r'ArtifactsControllerCreateRequest', 'name'),
            description: description,
            iconUrl: iconUrl,
            oneSetEffect: oneSetEffect,
            twoSetEffect: twoSetEffect,
            fourSetEffect: fourSetEffect,
            version: BuiltValueNullFieldError.checkNotNull(
                version, r'ArtifactsControllerCreateRequest', 'version'));
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
